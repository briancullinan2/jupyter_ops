mkdir -p novnc ; if git --work-tree=./novnc branch | grep 'master'; then \
echo "Already checked out novnc"; \
else \
git clone https://github.com/novnc/noVNC.git ./novnc ; \
fi ; ls -la novnc ; pwd
